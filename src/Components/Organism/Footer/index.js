import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800 mt-12">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Practo</h5>
        <p>About</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Contact Us</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">For Patients</h5>
        <p>Search for doctors</p>
        <p>Search for clinics</p>
        <p>Search for hospitals</p>
        <p>Book Diagnostic Tests</p>
        <p>Book full body Checkups</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">For Clinics</h5>
        <p>Ray by Practo</p>
        <p>Practo Reach</p>
        <p>Ray Tab</p>
        <p>Practo Pro</p>
        <p>Practo Profile</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">More</h5>
        <p>Help</p>
        <p>Developers</p>
        <p>Terms & Conditions</p>
        <p>Practo Health Wiki </p>
        <p>Corporate Wellness</p>
      </div>
    </div>
  );
}

export default Footer;
