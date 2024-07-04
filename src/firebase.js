import { initializeApp } from "firebase/app"
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth, signOut } from "firebase/auth"
import { getDatabase, ref, set, get, remove } from "firebase/database"
import { getStorage, uploadBytesResumable, deleteObject, getDownloadURL, listAll, ref as sRef } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCFop3XK5sgsZPFYtgZ9JID-HycIumzhWY",
  authDomain: "nanny-services-b826a.firebaseapp.com",
  databaseURL: "https://nanny-services-b826a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nanny-services-b826a",
  storageBucket: "nanny-services-b826a.appspot.com",
  messagingSenderId: "1012521133104",
  appId: "1:1012521133104:web:6b6ebfcb2775458abb39f5",
  measurementId: "G-D7JJPMWEMH",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase()
const storage = getStorage(app)

//************************************************* Resource Functions *************************************************//
// Get Recources
export const getResouce = async (resource) => {
  try {
    const resourceRef = ref(database, `db/${resource}`)
    const snapshot = await get(resourceRef)

    if (snapshot.exists()) {
      const resourceArray = Object.values(snapshot.val())
      return resourceArray
    } else {
      return []
    }
  } catch (error) {
    throw Error(error)
  }
}

// upload Resources
export const uploadResource = async (files, data, resource, progressCallback) => {
  const resourceId = (Math.random() + 1).toString(36).substring(5)

  //upload images and get storage url
  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const storageRef = sRef(storage, `/${resource}/${resourceId}/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          progressCallback(progress)
        },
        (error) => {
          reject(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              data.images.push({ name: file.name, file: downloadURL })
              resolve()
            })
            .catch((error) => {
              reject(error)
            })
        }
      )
    })
  })

  try {
    await Promise.all(uploadPromises)
    await set(ref(database, `db/${resource}/${resourceId}/`), { ...data, id: resourceId })
  } catch (error) {
    console.error("Error uploading files", error)
    throw error
  }
}

// update Resources
export const updateResource = async (files, data, resource, progressCallback) => {
  const resourceId = data.id

  //upload images and get storage url
  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const storageRef = sRef(storage, `/${resource}/${resourceId}/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          progressCallback(progress)
        },
        (error) => {
          reject(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("data: ", data)
              data.images.push({ name: file.name, file: downloadURL })
              resolve()
            })
            .catch((error) => {
              reject(error)
            })
        }
      )
    })
  })

  try {
    await Promise.all(uploadPromises)

    console.log("data: ", data)
    await set(ref(database, `db/${resource}/${resourceId}/`), { ...data })
  } catch (error) {
    console.error("Error uploading files", error)
    throw error
  }
}

// Delete an item from Storage and Database
export const deleteListing = async (resource, id) => {
  try {
    const desertRef = sRef(storage, `${resource}/${id}`)

    const result = await listAll(desertRef)
    const deletePromises = result.items.map((itemRef) => deleteObject(itemRef))

    await Promise.all(deletePromises)
    await remove(ref(database, `db/${resource}/${id}/`))

    console.log("Listing deleted successfully")
  } catch (error) {
    console.error("Error deleting item:", error)
  }
}

//************************************************* AUTH FUNCTIONS *************************************************//

// Log in
export const logIn = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    throw Error(error)
  }
}

// Log out
export const logOut = async () => {
  return signOut(auth)
    .then(() => {
      console.log("User signed out successfully")
    })
    .catch((error) => {
      console.error("Error signing out user", error)
      throw error
    })
}

// Check is user is signed in
export const authStatus = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(true)
        } else {
          resolve(false)
        }
      },
      (error) => {
        reject(error)
      }
    )
  })
}

export default app
