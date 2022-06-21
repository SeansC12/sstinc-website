import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white h-screen md:h-[50vh]">
        <div className="w-full p-10 h-full justify-center md:flex grid grid-cols-1 place-items-center">
          <div className="w-full md:w-1/2 grid space-y-1 h-fit justify-center text-center">
            <h1 className="text-4xl mb-3">SST Inc HQ</h1>
            <p>School of Science and Technology, Singapore</p>
            <p>Block C, Level 3</p>
            <p>1 Technology Drive, Singapore 138572</p>
            <p className="pt-3">
              Email:{" "}
              <a href="mailto:contact@sstinc.org">
                <strong>contact@sstinc.org</strong>
              </a>
            </p>
            <p>
              Operating hours: Mondays, <strong>14:30</strong> to{" "}
              <strong>17:00</strong>
            </p>
            <div className="flex items-center pt-5 justify-center">
              <p className="mr-3">Visit us at: </p>
              <a href="https://instagram.com/sstincorporated">
                <img
                  className="w-16"
                  src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                ></img>
              </a>
            </div>
          </div>
          <div className="h-0 md:h-full w-0 md:w-[1px] bg-slate-400 m-0 md:mx-10" />
          <div className="float-right md:w-1/2 mr-0 sm: w-full">
            <p className="text-2xl">Contact Us</p>
            <p className="Email:"></p>
            <form
              className="grid space-y-4 mt-5 text-sm text-black place-items-center"
              action="https://formsubmit.co/phr256@gmail.com"
              method="POST"
            >
              <input
                type="text"
                className="rounded-full px-3 py-2 h-8 w-full"
                name="Name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="rounded-full px-3 py-2 h-8 w-full"
                name="Email"
                placeholder="Email"
                required
              />
              <textarea
                className="rounded-2xl px-3 py-2 h-28 w-full"
                name="Message"
                placeholder="Message"
                required
              />

              <button
                type="submit"
                className="bg-zinc-300 text-black rounded drop-shadow-2xl hover:shadow-white w-24 h-8"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
  )
}
