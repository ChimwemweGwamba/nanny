import React, { useState } from "react"
import bannerImg from "../img/banner.png"
import emailjs from "@emailjs/browser"
import { Modal, Form, Input, Button, message, Spin } from "antd"
import { LoadingOutlined } from '@ant-design/icons'

function BecomeNanny() {
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

  const handleTrainingProgramsClick = () => {
    window.location.href = "/resources"
  }

  return (
    <div className="w-full bg-primary2 rounded-3xl py-20 lg:py-32 my-32">
    <div className="w-11/12 mx-auto">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-x-20 gap-x-10">
        <div className="lg:w-6/12 pb-20 lg:pb-0">
          <p className="text-3xl lg:text-5xl text-secondary font-semibold leading-tight lg:leading-tight mb-10">
            Looking for work? Become a certified Nanny Today
          </p>

          <p className="mb-10 text-sm">
            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus
            lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
            Tellus consequat nisl quis nisl justo.
          </p>

          <div className="flex flex-row gap-10">
            <button onClick={showModal} className="text-white w-fit text-sm p-4 bg-secondary rounded-3xl">
              Sign Up
            </button>

            <button onClick={handleTrainingProgramsClick} className="text-white w-fit text-sm p-4 bg-secondary mr-10 rounded-3xl">
              Training Programs
            </button>
          </div>
        </div>

        <div className="lg:w-5/12 bg-primary">
          <img src={bannerImg} alt="imageAlt" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>

    <Modal
        title='Become a Nanny'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            form='myForm'
            key='submit'
            type='primary'
            htmlType='submit'
            style={{ backgroundColor: "#B78D5A" }}
            loading={isLoading}
          >
            Submit
          </Button>,
        ]}
      >
        <div>
          {isSubmitted ? (
            <p className='mb-5 text-green-500'>Form submitted successfully!</p>
          ) : (
            <p className='mb-5'>Fill out the form below to become a nanny:</p>
          )}
          <Form form={form} name='myForm' onFinish={onFinish} layout='vertical'>
            <Form.Item label='Name' name='name' rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label='Age' name='age' rules={[{ required: true, message: "Please input your age!" }]}>
              <Input type='number' />
            </Form.Item>
            <Form.Item
              label='Phone Number'
              name='phone'
              rules={[{ required: true, message: "Please input your phone number!" }]}
            >
              <Input />
            </Form.Item>

            {isLoading && (<Spin indicator={<LoadingOutlined style={{ fontSize: 24,}} spin />} />)}
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default BecomeNanny
