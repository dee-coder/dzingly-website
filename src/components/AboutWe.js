import React from "react";

const AboutWe = () => {
  return (
    <section className="testimonial-box">
      <div className="row">
        <div className="container">
          <div className="heading-section">
            <h1 className="title">Who We Are</h1>
            <div className="border-bottom"></div>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-12 text-center">
            <img src="/img/who-we-are.png" className="" alt="Liz Davis" />
          </div>
          <div className="col-lg-12 top-space-20 text-center">
            <p>
              DZINLY is the brainchild of entrepreneurs Matthew Mosher, Robert
              Pryzma and Carlos Aleman. For more than 20 years, Matthew has
              worked in the high-end residential architecture and technology
              businesses. He pioneered the use of virtual renderings to bring
              projects to life for clients before construction even started.
            </p>

            <p>
              Realizing there was a need for quality exterior design and
              visualization tools to allow homeowners and professionals to
              quickly and affordably create renderings, Matthew partnered with
              Robert and Carlos who are technology visualization experts.
              Together, they created DZINLY.
            </p>

            <p>
              Today, DZINLY works with a vast network of designers, master
              computer renderers and manufacturers to provide a simple solution
              for homeowners and professionals to achieve great designs and gain
              access to the excellent visualization tools they need to execute
              their projects.
            </p>
          </div>

          <div className="col-lg-5 hide"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutWe;
