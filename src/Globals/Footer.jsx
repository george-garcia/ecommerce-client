export default function Footer() {
  return (
    <div className={"mt-20 py-20 bg-zinc-300"}>
      <div
        className={"my-0 mx-auto w-3/4 flex justify-between flex-wrap "}
        style={{ rowGap: "30px", columnGap: "clamp(20px, 30px, 40px" }}
      >
        <div style={{ width: "clamp(20%, 30%, 40%" }}>
          <h4 className={"font-bold mb-14"}>ECOMMER</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            beatae dignissimos doloremque, enim exercitationem in laborum
            maiores maxime, minima nihil omnis perspiciatis provident quas quasi
            qui repellat repudiandae sapiente sed?
          </p>
        </div>
        <div>
          <h4 className={"font-bold mb-14"}>About Us</h4>
          <h4 className={"mb-14"}>Careers</h4>
          <h4 className={"mb-14"}>Our Stores</h4>
          <h4 className={"mb-14"}>Terms & Conditions</h4>
          <h4 className={"mb-14"}>Privacy Policy</h4>
        </div>
        <div>
          <h4 className={"font-bold mb-14"}>Customer Care</h4>
          <h4 className={"mb-14"}>Help Center</h4>
          <h4 className={"mb-14"}>Track Your Order</h4>
          <h4 className={"mb-14"}>Corporate & Bulk Purchasing</h4>
          <h4 className={"mb-14"}>Returns & Refunds</h4>
        </div>
        <div style={{ width: "clamp(20%, 25%, 30%" }}>
          <h4 className={"font-bold mb-14"}>Contact Us</h4>
          <h4 className={"mb-14"}>
            50 North Whatever Blvd, Washington, DC 10501
          </h4>
          <h4 className={"mb-14"}>Email: Something@gmail.com</h4>
          <h4 className={"mb-14"}>(222)333-4444</h4>
        </div>
      </div>
    </div>
  );
}
