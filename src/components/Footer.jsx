import FooterForm from "./FooterForm"
const Footer = () => {
  return (
    <div className="footerSectionContainer" style={{padding: '0 8rem', marginTop: '10rem'}}>
      <div className="footerFirstContext">Subscribe to newsletter</div>
      <FooterForm />
      <div className="footerIcons">
        <i className="ri-facebook-circle-fill footerIcon"></i>
        <i className="ri-twitter-fill footerIcon"></i>
        <i className="ri-instagram-line footerIcon"></i>
      </div>
      <p className="footerFinalContent" style={{textAlign: 'center'}}> <a href="https://okorojames.netlify.app" target="_blank" style={{color: '#162050'}}>Okoro James</a> &nbsp;||&nbsp;copyright &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer