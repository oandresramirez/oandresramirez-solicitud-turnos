import React, { useEffect } from 'react';

export default (props) => {
  const bodyRef = React.createRef();



  useEffect(() => {
    let createPdf = () => props.createPdf(bodyRef.current);
    if (props.estado) { createPdf(); }
  }, [props])

  return (
    <section className="pdf-container">
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  )
}