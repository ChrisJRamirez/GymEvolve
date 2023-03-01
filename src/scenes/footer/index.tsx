import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            At our gym, we strive to provide you with an exceptional fitness
            experience that will help you reach your goals. We look forward to
            helping you on your fitness journey!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Locations</p>
          <p className="my-5">Rates</p>
        </div>
        <div className="mt-16 basis1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">We would love to hear from you!</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
