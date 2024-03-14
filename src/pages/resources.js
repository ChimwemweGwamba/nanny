import React, { useState } from "react"
import faq from "../img/faq.png"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import emailjs from "@emailjs/browser"
import { Modal, Form, Input, Button, message, Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

function Resources() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      await form.validateFields()
      form.submit()
    } catch (error) {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = async (values) => {
    setIsLoading(true)

    var templateParams = {
      name: values.name,
      age: values.age,
      email: values.email,
      phone: values.phone,
      program: "values.program",
    }

    try {
      const response = await emailjs.send("service_vjzq78e", "template_rxndr88", templateParams, "GOt38AnMGYeGsBpE-")
      if (response.status === 200) {
        form.resetFields()
        setIsSubmitted(true)
        setTimeout(() => setIsModalVisible(false), 2000)
        message.success(`Form submitted successfully! Kindly check your email ${values.email} for next steps`)
      } else {
        message.error(`Error signing up, kindly contact admin`, [10000])
      }
    } catch (error) {
      console.log("error: ", error)
      message.error(`Error signing up, kindly contact admin`)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="lg:w-[98%] w-[95%] mx-auto">
      <NavBar />

      <div className="w-full bg-primary rounded-3xl">
        <div className="w-11/12 h-full mx-auto flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:w-6/12 py-10 lg:py-0">
            <p className="text-3xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight mb-10">
              Your Guide to Nanny Mastery.
            </p>

            <p className="text-white text-sm">
              Embark on a transformative journey with our Nanny Training Guide, where excellence is not just a goal but
              a guarantee.
            </p>

            <div className="">
              <button onClick={showModal} className="text-white text-sm p-4 bg-secondary mr-10 rounded-3xl mt-5">
                Become a nanny
              </button>
            </div>
          </div>

          <div className="lg:w-5/12 h-full">
            <img src={faq} alt="bannerImg" className="w-10/12 mx-auto h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto py-20">
        <p className="lg:w-10/12 text-3xl lg:text-5xl text-secondary leading-tight lg:leading-tight font-semibold">
          Explore Our Comprehensive Nanny Training Curriculum Guide.
        </p>

        <p className="lg:w-10/12 text-sm mt-4">
          From safety foundations to advanced techniques, we elevate every nanny's skills. Join us in creating enriching
          environments where learning thrives and childhoods flourish.
        </p>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="mb-10">
            <h2 className="text-xl lg:text-xl text-secondary font-semibold mb-2">LEVEL 1- FOUNDATION</h2>
            <p className="text-gray-700 textsm">
              The Basic Childcare program ensures that in home childcare providers can establish and maintain a safe,
              clean, and healthy environment for children.
              <br />
              <br />
              A. Understanding children
              <br />
              B. Emergency planning,( home, water and food safety.)
              <br />
              C. Legal requirements when working with children
              <br />
              D. Stress management
              <br />
              E. Positive discipline
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl lg:text-xl text-secondary font-semibold mb-2">LEVEL 2- CORE</h2>
            <p className="text-gray-700 textsm">
              The Intermediate Childcare Certification –The focus of this program is the first 5 years of life. the Core
              level courses offers all the components of foundation level with advanced instruction on:
              <br />
              <br />
              A. Early childhood development <br />
              B. Child growth, and health. <br />
              C. Nutrition, motor skill development <br />
              D. Enrichment activities (reading and STEM)
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl lg:text-xl text-secondary font-semibold mb-2">LEVEL 3 -ADVANCED</h2>
            <p className="text-gray-700 textsm">
              Advanced Childcare Certification Its undeniable that music, art, fitness, and helping with homework help
              children learn and thrive. This program includes academic support. The Advanced Childcare program teach
              nannies how to engage with children in a way that makes learning more fun. Nannies also gain better
              communicating skills with children and families.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl lg:text-xl text-secondary font-semibold mb-2">LEVEL 4 - SPECIALISED</h2>
            <p className="text-gray-700 textsm">
              Specialist Childcare Certification – Family assistants and household managers are increasingly popular
              with families and employers. Not just a nanny, family assistants can support special needs including
              medically required diets. Building on the Advanced program, the Specialist curriculum includes how to work
              with children at risk and special education environments. Family assistant jobs have elements of household
              management so additional training in etiquette, scheduling, and pet care is provided.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl lg:text-xl text-secondary font-semibold mb-2">LEVEL 5 - MASTER</h2>
            <p className="text-gray-700 textsm">
              Professional Childcare Certification – The Professional Childcare Certification shows that a nanny has
              successfully passed a rigorous training program that builds on the Specialist program and includes child
              development theories, multi-cultural activities, current trends in childcare, and human brain development.
              <br /> <br />
              Foreign language skills. Many families seek bilingual nannies who can support or teach children a second
              language. Exposing children to different language patterns as a young age can improve retention and
              fluency. Language skills can be used by infants in the form of sign language while 2 and 3 year-old can
              absorb new words as their language skills rapidly develop.{" "}
            </p>
          </div>
        </div>
      </div>

      <Modal
        title="Become a Nanny"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            form="myForm"
            key="submit"
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#B78D5A" }}
            loading={isLoading}
          >
            Submit
          </Button>,
        ]}
        width={1000}
      >
        <div>
          {isSubmitted ? (
            <p className="mb-5 text-green-500">Form submitted successfully!</p>
          ) : (
            <p className="mb-5">Fill out the form below to become a nanny</p>
          )}
          <Form form={form} name="myForm" onFinish={onFinish} layout="vertical" requiredMark={false}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Age" name="age" rules={[{ required: true, message: "Please input your age!" }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true, message: "Please input your phone number!" }]}
            >
              <Input />
            </Form.Item>

            {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
          </Form>
        </div>
      </Modal>

      <Footer />
    </div>
  )
}

export default Resources
