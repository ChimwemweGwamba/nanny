import React, { useState } from "react"
import bannerImg from "../img/banner2.jpg"
import emailjs from "@emailjs/browser"
import { Modal, Form, Input, Button, message, Spin, Radio, Checkbox } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

function Banner() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isHireModalVisible, setIsHireModalVisible] = useState(false)

  const showHireModal = () => {
    setIsHireModalVisible(true)
  }

  const handleHireModalCancel = () => {
    setIsHireModalVisible(false)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const onHireNannyFinish = (values) => {
    console.log("Submitted values:", values)
    setTimeout(() => setIsHireModalVisible(false), 2000)
    message.success(`Form submitted successfully! A member of our team will contact you within the next 24 hours`)
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
    <div className='w-full lg:h-[80vh] bg-primary rounded-3xl'>
      <div className='w-11/12 h-full mx-auto flex lg:flex-row flex-col justify-between items-center'>
        <div className='lg:w-5/12 py-20 lg:py-0'>
          <p className='text-5xl lg:text-6xl text-white font-semibold leading-tight lg:leading-tight mb-10'>
            Looking For A Nanny?
          </p>

          <p className='text-white mb-10'>
            You will have everything nearby: supermarket, buses, station, the Carmen neighborhood, etc.
          </p>

          <div className=''>
            <button onClick={showHireModal} className='text-white text-sm p-4 bg-secondary mr-10 rounded-3xl'>
              Hire a nanny
            </button>

            <button onClick={showModal} className='text-secondary text-sm p-4 bg-white rounded-3xl'>
              Become a nanny
            </button>
          </div>
        </div>

        <div className='lg:w-6/12 h-full'>
          <img src={bannerImg} alt='Nanny Services' className='w-full h-full object-cover lg:py-0 py-5 rounded' />
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
        width={1000}
      >
        <div>
          {isSubmitted ? (
            <p className='mb-5 text-green-500'>Form submitted successfully!</p>
          ) : (
            <p className='mb-5'>Fill out the form below to become a nanny</p>
          )}
          <Form form={form} name='myForm' onFinish={onFinish} layout='vertical' requiredMark={false}>
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

            {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
          </Form>
        </div>
      </Modal>

      <Modal
        title='Hire a nanny'
        visible={isHireModalVisible}
        onCancel={handleHireModalCancel}
        footer={[
          <Button key='back' onClick={handleHireModalCancel}>
            Close
          </Button>,
          <Button
            key='submit'
            type='primary'
            htmlType='submit'
            style={{ backgroundColor: "#B78D5A", color: "white" }}
            form='hireNannyForm'
          >
            Submit
          </Button>,
        ]}
        width={1000}
      >
        <div>
          <h3 className='font-bold text-primary capitalize'>Why us?</h3>
          <p className='mb-10'>
            Our agency prioritizes understanding your family's needs, going beyond mere connections to provide expertly
            matched nannies tailored to your unique dynamics and preferences. <br />
            <br /> With a streamlined selection process, we simplify hiring by assessing your needs and presenting
            well-matched candidates, ensuring a hassle-free experience. <br /> <br />
            Safety is paramount; our nannies undergo rigorous training, including CPR and First Aid certification,
            guaranteeing your child's well-being and your peace of mind
          </p>

          <h3 className='font-bold text-primary capitalize'>How it works?</h3>
          <p className='mb-10'>
            <span className='font-medium'>Intake Form:</span> Begin by completing our detailed intake form, offering
            crucial insights into your family's unique needs, preferences, and requirements. The more we grasp about
            your dynamics, the better we can tailor our search.
            <br />
            <br />
            <span className='font-medium'>Consultation:</span> After the intake form, we schedule a personalized
            consultation to delve deeper into your expectations. This session allows you to express preferences, discuss
            your family's lifestyle, and clarify desired nanny qualities.
            <br />
            <br />
            <span className='font-medium'>Contract Signing:</span> Once potential candidates are identified, and you've
            found a suitable match, we proceed with a clear, concise contract. Our agreements safeguard both employer
            and nanny, detailing expectations, responsibilities, and terms of service.
            <br />
            <br />
            <span className='font-medium'>Finding the Right Fit:</span> Our commitment extends beyond contract signing.
            We recognize that success hinges on the compatibility between your family and the nanny. If the initial
            match falls short, we offer a free referral replacement within the first year.
          </p>

          <div className='border rounded p-4'>
            <Form
              name='hireNannyForm'
              layout='vertical'
              onFinish={onHireNannyFinish}
              className='mb-10'
              requiredMark={false}
            >
               <h2 className="text-lg font-bold uppercase text-center mb-4">Intake Form</h2>

              <Form.Item
                label='1. Where do you live?'
                name='location'
                rules={[{ required: true, message: "Please input your location!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='2. What are the ages of the children you have in your household?'
                name='childAges'
                rules={[{ required: true, message: "Please select at least one option!" }]}
              >
                <Checkbox.Group>
                  <Checkbox value='under1'>Under 1 year</Checkbox>
                  <Checkbox value='1'>1 year</Checkbox>
                  <Checkbox value='2'>2 years</Checkbox>
                  <Checkbox value='3'>3 years</Checkbox>
                  <Checkbox value='4'>4 years</Checkbox>
                  <Checkbox value='primary'>Primary school age</Checkbox>
                  <Checkbox value='secondary'>Secondary school age</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item
                label='3. Do you currently use any child care?'
                name='currentChildCare'
                rules={[{ required: true, message: "Please select an option!" }]}
              >
                <Radio.Group>
                  <Radio value='looking'>No, but I may be looking for child care within the near future.</Radio>
                  <Radio value='yes'>Yes.</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label='4. Please indicate what type of child care you currently use (or would like to make use of)'
                name='childCareType'
                rules={[{ required: true, message: "Please select at least one option!" }]}
              >
                <Checkbox.Group>
                  <Checkbox value='childMinder'>Child minder</Checkbox>
                  <Checkbox value='preschool'>Preschool</Checkbox>
                  <Checkbox value='nursery'>Nursery/full day care</Checkbox>
                  <Checkbox value='breakfastClub'>Breakfast club / after school club</Checkbox>
                  <Checkbox value='holidayClubs'>Holiday clubs</Checkbox>
                  <Checkbox value='informal'>I use informal child care (family or friends)</Checkbox>
                  <Checkbox value='other'>Other (please specify)</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item
                label='5. Please indicate the amount you pay (or are prepared to pay) for this service'
                name='paymentType'
                rules={[{ required: true, message: "Please select at least one option!" }]}
              >
                <Checkbox.Group>
                  <Checkbox value='hourly'>Hourly</Checkbox>
                  <Checkbox value='daily'>Daily</Checkbox>
                  <Checkbox value='monthly'>Monthly</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item
                label='6. When are you most likely to use the child care'
                name='timeOfUse'
                rules={[{ required: true, message: "Please select at least one option!" }]}
              >
                <Checkbox.Group>
                  <Checkbox value='8-9'>8.00am-9.00am</Checkbox>
                  <Checkbox value='9-12'>9.00am-12noon</Checkbox>
                  <Checkbox value='12-3'>12noon-3.00pm</Checkbox>
                  <Checkbox value='3-6'>3.00pm-6.00pm</Checkbox>
                  <Checkbox value='fullDay'>Full day care (full time, Mon-Fri)</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item
                label='7. Which days are you most likely to use the child care'
                name='daysOfUse'
                rules={[{ required: true, message: "Please select at least one option!" }]}
              >
                <Checkbox.Group>
                  <Checkbox value='monday'>Monday</Checkbox>
                  <Checkbox value='tuesday'>Tuesday</Checkbox>
                  <Checkbox value='wednesday'>Wednesday</Checkbox>
                  <Checkbox value='thursday'>Thursday</Checkbox>
                  <Checkbox value='friday'>Friday</Checkbox>
                  <Checkbox value='fullTime'>Full Time (Mon-Sun)</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item label='8. When choosing child care, how highly do you rank the below' name='rankFactors'>
                <Input.TextArea />
              </Form.Item>

              <Form.Item
                label='9. If you were offered new child care that met your needs, how likely would you be to make use of it?'
                name='likelihoodOfUse'
                rules={[{ required: true, message: "Please select an option!" }]}
              >
                <Radio.Group>
                  <Radio value='veryLikely'>Very likely</Radio>
                  <Radio value='possibly'>Possibly</Radio>
                  <Radio value='notLikely'>Not very likely</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label='10. Please add any additional factors which would influence your choice of child care'
                name='additionalFactors'
                rules={[{ required: true, message: "Please input additional factors!" }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Phone Number'
              name='phone'
              rules={[{ required: true, message: "Please input your phone number!" }]}
            >
              <Input />
            </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Banner
