export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row justify-between p-[20px] m-[20px] text-xl">
        <div>
          <a href="#">Lemi Bekele</a>
        </div>
        <div>
          <ul className="flex flex-row gap-5 ">
            <li>
              <a href="#" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
      <div className="w-100 h-[1px] bg-black"></div>
    </div>
  );
}
