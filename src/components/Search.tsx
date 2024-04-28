import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";

function Search() {
  const [openModalSubscribe, setOpenModalSubscribe] = useState(false);
  const [emailSubscribe, setEmailSubscribe] = useState('');
  const [location, setLocation] = useState('');
  const [subscribeError, setSubscribeError] = useState('');

  function onCloseModalSubscribe() {
    setOpenModalSubscribe(false);
    setEmailSubscribe('');
    setLocation('')
  }

  const [openModalUnsubscribe, setOpenModalUnsubscribe] = useState(false);
  const [emailUnsubscribe, setEmailUnsubscribe] = useState('');

  function onCloseModalUnsubscribe() {
    setOpenModalUnsubscribe(false);
    setEmailUnsubscribe('');
  }



  const handleSubmitSubscribe = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      // Gửi thông tin đăng ký lên server
      const response = await fetch('http://localhost:3001/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailSubscribe, location }),
      });

      if (response.ok) {
        // Nếu đăng ký thành công, đóng modal và xóa các trường nhập
        onCloseModalSubscribe();
      } else {
        // Nếu có lỗi, hiển thị thông báo lỗi
        const data = await response.json();
        console.log(data.message)
        setSubscribeError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubscribeError('Something went wrong, please try again later.');
    }
  };
  return (
    <form>
        <p>Enter a City Name</p>
        <input type="search" className="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="E.g, New York, London, Tokyo" required />
        <button type="submit" className=" w-full flex justify-center py-2.5 px-3 my-4 text-white bg-blue-600 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"> 
            Search
        </button>
        <div className="flex items-center">
            <div className="w-full border-b border-gray-400"></div>
            <div className="px-4 text-gray-500">or</div>
            <div className="w-full border-b border-gray-400"></div>
        </div>
        <button type="button" className=" w-full flex justify-center py-2.5 px-3 my-4 text-white bg-gray-600 rounded-md border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"> 
            Use Current Location
        </button>

        <div className='flex space-x-2'>
          <button onClick={() => setOpenModalUnsubscribe(true)} type="button" className=" w-full flex justify-center py-2.5 px-3 my-4 text-white bg-gray-600 rounded-md border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"> 
              Unsubscribe
          </button>
          <Modal show={openModalUnsubscribe} size="md" onClose={onCloseModalUnsubscribe} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Unsubscribe receive daily weather forecast information</h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={emailUnsubscribe}
                    onChange={(event) => setEmailUnsubscribe(event.target.value)}
                    required
                  />
                </div>
                
                <div className="w-full">
                  <Button>Confirm</Button>
                </div>
                
              </div>
            </Modal.Body>
          </Modal>



          <button onClick={() => setOpenModalSubscribe(true)} type="button" className=" w-full flex justify-center py-2.5 px-3 my-4 text-white bg-blue-600 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"> 
              Subscribe
          </button>

          <Modal show={openModalSubscribe} size="md" onClose={onCloseModalSubscribe} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Subscribe to receive daily weather forecast information</h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={emailSubscribe}
                    onChange={(event) => setEmailSubscribe(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Location" />
                  </div>
                  <TextInput id="password" placeholder="E.g, New York, London, Tokyo" type="text" onChange={(event) => setLocation(event.target.value)} required />
                </div>
                
                <div className="w-full">
                  <Button onClick={handleSubmitSubscribe}>Confirm</Button>
                </div>
                
              </div>
            </Modal.Body>
          </Modal>
        </div>
    </form>

  );
}

export default Search;