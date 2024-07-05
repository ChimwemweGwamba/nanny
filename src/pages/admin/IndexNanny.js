import React, { useState, useEffect, useRef, useCallback } from "react"
import { getResouce, authStatus, deleteListing } from "../../firebase"
import { Link } from "react-router-dom"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import Loader from "../../components/loader"
import { Modal } from "antd"
import AdminNavtab from "../../components/adminNavtab"
import { useNavigate } from "react-router-dom"

function IndexNanny() {
  const [listing, setListing] = useState("")
  const [loading, setLoading] = useState(false)
  const [deleteListingId, setDeleteListingId] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const gridRef = useRef()
  const navigate = useNavigate()

  // Get Nanny Data
  const getListings = async () => {
    setLoading(true)

    try {
      const nannyData = await getResouce("nannies")
      setListing(nannyData)
      setLoading(false)
    } catch (error) {
      console.log("Error: ", error)
      setLoading(false)
    }
  }

  const checkStatus = async () => {
    try {
      let auth = await authStatus()
      auth ? console.log("logged") : navigate("/admin/login")
    } catch (err) {
      alert("error: unable to authenticate", err)
      navigate("/admin/login")
    }
  }

  useEffect(() => {
    checkStatus()
    getListings()
  }, [])

  // Modal Functions
  const showModal = (id) => {
    setDeleteListingId(id)
    setIsModalOpen(true)
  }

  const handleOk = async () => {
    setIsModalOpen(false)
    setLoading(true)

    await deleteListing("nannies", deleteListingId)
    await getListings("nannies")

    setDeleteListingId("")
    setLoading(false)
  }

  const handleCancel = () => {
    setDeleteListingId("")
    setIsModalOpen(false)
  }

  const modalButtonProps = {
    style: {
      backgroundColor: "#B36824",
    },
  }

  // Setup AgGridReact Table
  const columnDefs = [
    { headerName: "Name", field: "name", filter: "agSetColumnFilter" },
    { headerName: "Skills", field: "skills" },
    { headerName: "Age", field: "age" },
    { field: "Action", cellRenderer: CustomCellRenderer },
  ]

  const rowData = [...listing]

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(document.getElementById("filter-text-box").value)
  }, [])

  // Custom table column
  function CustomCellRenderer({ data }) {
    return (
      <div>
        <Link to='/admin/viewNanny' state={data} className='mx-2 text-green-500 text-xs font-semibold'>
          View
        </Link>

        <Link to={`/admin/editNanny/${data.id}`} state={data} className='mx-2 text-blue-500 text-xs font-semibold'>
          Edit
        </Link>

        <button onClick={() => showModal(data.id)} className='mx-2 text-red-500 text-xs font-semibold'>
          Delete
        </button>
      </div>
    )
  }

  return (
    <div>
      <AdminNavtab />

      <Modal
        title='Delete Listing'
        okButtonProps={modalButtonProps}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this listing?</p>
      </Modal>

      {loading && <Loader />}

      <div className='w-11/12 lg:w-10/12 mx-auto flex flex-wrap items-center justify-center gap-5 py-10'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-xl lg:text-3xl text-[#B36824] font-medium'>Nannies</p>

          <Link to='/admin/addNanny' className='px-1 bg-[#B36824] text-white rounded'>
            <p className='py-2 px-2 text-sm lg:px-5'>Add Nanny</p>
          </Link>
        </div>

        <div className='ag-theme-alpine' style={{ height: "auto", width: "100%" }}>
          <div className='py-2'>
            <input
              type='text'
              id='filter-text-box'
              placeholder='Search'
              className='border h-8 px-2 rounded'
              onInput={onFilterTextBoxChanged}
            />
          </div>

          <AgGridReact
            ref={gridRef}
            columnDefs={columnDefs}
            rowData={rowData}
            domLayout='autoHeight'
            defaultColDef={{
              resizable: true,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default IndexNanny