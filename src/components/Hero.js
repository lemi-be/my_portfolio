export default function Hero() {
  return (
    <div>
      <div className="flex flex-row place-content-center place-items-center gap-[100px] font-extrabold">
        <div>
          <p className="text-5xl mb-3">Hi,</p>
          <p className="text-4xl mb-2 text-gray-700">I'm a</p>
          <p className="text-5xl mb-5">Software Engineer</p>
          <div>
            <p className="text-gray-500 mb-10 text-[15px] font-light">
              If you want see some of my projects check the link below.
            </p>
          </div>
          <button className="w-[100px] h-[45px] bg-purple-900 font-bold text-white mt-[100px]">
            Projects
          </button>
        </div>
        <div>
          <img src=".//profile.jpg" width="500px"></img>
        </div>
      </div>
    </div>
  );
}
