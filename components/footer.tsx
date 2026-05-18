import Link from "next/link";

export default function Footer(){
    return(
      <>
      <div className="sticky-icon">
        <Link href="https://www.linkedin.com/in/ponvizhi-john-freelance-web-designer-and-front-end-developer-b7270313b" className="linkedin" target="_blank" rel="noopener">
          <svg className="cursor-pointer  transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
                    <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="#fff"></rect>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.6975 21.5618C22.6561 21.5618 21 23.1674 21 25.1456V68.0091C21 69.9875 22.6563 71.5918 24.6975 71.5918H67.3325C69.3747 71.5918 71.03 69.9873 71.03 68.0086V25.1456C71.03 23.1674 69.3747 21.5618 67.3325 21.5618H24.6975ZM36.2032 40.9068V63.4304H28.7167V40.9068H36.2032ZM36.6967 33.9411C36.6967 36.1025 35.0717 37.8321 32.4615 37.8321L32.4609 37.8319H32.4124C29.8998 37.8319 28.2754 36.1023 28.2754 33.9409C28.2754 31.7304 29.9489 30.0491 32.5111 30.0491C35.0717 30.0491 36.6478 31.7304 36.6967 33.9411ZM47.833 63.4304H40.3471L40.3469 63.4312C40.3469 63.4312 40.4452 43.0205 40.3475 40.9075H47.8336V44.0957C48.8288 42.5613 50.6098 40.3787 54.5808 40.3787C59.5062 40.3787 63.1991 43.598 63.1991 50.516V63.4304H55.7133V51.3822C55.7133 48.354 54.6293 46.2887 51.921 46.2887C49.8524 46.2887 48.6206 47.6815 48.0796 49.0271C47.8819 49.5072 47.833 50.1813 47.833 50.8535V63.4304Z" fill="#006699"></path>
                  </svg> LinkedIn
        </Link>
        <Link href="https://wa.me/919840385621" className="whatsapp" target="_blank" rel="noopener">
          <svg className="cursor-pointer transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                    <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#fff"></rect>
                    <path d="M23.5762 66.8405L26.8608 54.6381C24.2118 49.8847 23.3702 44.3378 24.4904 39.0154C25.6106 33.693 28.6176 28.952 32.9594 25.6624C37.3012 22.3729 42.6867 20.7554 48.1276 21.1068C53.5685 21.4582 58.6999 23.755 62.5802 27.5756C66.4604 31.3962 68.8292 36.4844 69.2519 41.9065C69.6746 47.3286 68.1228 52.7208 64.8813 57.0938C61.6399 61.4668 56.9261 64.5271 51.605 65.7133C46.284 66.8994 40.7125 66.1318 35.9131 63.5513L23.5762 66.8405ZM36.508 58.985L37.2709 59.4365C40.7473 61.4918 44.8076 62.3423 48.8191 61.8555C52.8306 61.3687 56.5681 59.5719 59.4489 56.7452C62.3298 53.9185 64.1923 50.2206 64.7463 46.2279C65.3002 42.2351 64.5143 38.1717 62.5113 34.6709C60.5082 31.1701 57.4003 28.4285 53.6721 26.8734C49.9438 25.3184 45.8045 25.0372 41.8993 26.0736C37.994 27.11 34.5422 29.4059 32.0817 32.6035C29.6212 35.801 28.2903 39.7206 28.2963 43.7514C28.293 47.0937 29.2197 50.3712 30.9732 53.2192L31.4516 54.0061L29.6153 60.8167L36.508 58.985Z" fill="#00D95F"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.0259 46.8847C54.5787 46.5249 54.0549 46.2716 53.4947 46.1442C52.9344 46.0168 52.3524 46.0186 51.793 46.1495C50.9524 46.4977 50.4093 47.8134 49.8661 48.4713C49.7516 48.629 49.5833 48.7396 49.3928 48.7823C49.2024 48.8251 49.0028 48.797 48.8316 48.7034C45.7543 47.5012 43.1748 45.2965 41.5122 42.4475C41.3704 42.2697 41.3033 42.044 41.325 41.8178C41.3467 41.5916 41.4555 41.3827 41.6286 41.235C42.2344 40.6368 42.6791 39.8959 42.9218 39.0809C42.9756 38.1818 42.7691 37.2863 42.3269 36.5011C41.985 35.4002 41.3344 34.42 40.4518 33.6762C39.9966 33.472 39.4919 33.4036 38.9985 33.4791C38.5052 33.5546 38.0443 33.7709 37.6715 34.1019C37.0242 34.6589 36.5104 35.3537 36.168 36.135C35.8256 36.9163 35.6632 37.7643 35.6929 38.6165C35.6949 39.0951 35.7557 39.5716 35.8739 40.0354C36.1742 41.1497 36.636 42.2144 37.2447 43.1956C37.6839 43.9473 38.163 44.6749 38.6801 45.3755C40.3607 47.6767 42.4732 49.6305 44.9003 51.1284C46.1183 51.8897 47.42 52.5086 48.7799 52.973C50.1924 53.6117 51.752 53.8568 53.2931 53.6824C54.1711 53.5499 55.003 53.2041 55.7156 52.6755C56.4281 52.1469 56.9995 51.4518 57.3795 50.6512C57.6028 50.1675 57.6705 49.6269 57.5735 49.1033C57.3407 48.0327 55.9053 47.4007 55.0259 46.8847Z" fill="#00D95F"></path>
                  </svg> Whatsapp
        </Link>
    </div>
        <footer className="footer">
   <div className="padding-global">
      <div className="container-large">
         <div className="footer_wrap">
            <div className="padding-section-medium">
               <div className="footer_layout">
                  <div className="footer_top">
                     <div className="footer_title-wrap">
                        <div className="margin-bottom-2rem">
                           <div className="global-heading-wrap"> 
                              <div className="global-heading w-richtext">
                                 <h2>Ready to launch a fast, high-performing <em>website for your business?</em></h2>
                              </div>
                           </div>
                        </div>
                        <div data-navbar="" data-wf--button--variant="base" className="ft_button">
                           <div className="button_content">
                              <div className="button_text">Get a Free Website Audit</div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button_arrow">
                                 <path d="M20 12L4 12M20 12C20 10.682 15 7 15 7M20 12C20 13.318 15 17 15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                              <Link href="#contact" className="button_link w-inline-block"></Link>
                           </div>
                        </div>
                     </div>
                     <div className="footer_links-wrap">
                        <div className="footer_links-col">
                           <div className="heading-style-h4">Direct contact</div>
                           <ul role="list" className="global_list footer_links-list">
                              <li className="global_list-item global_link-item"><Link href="mailto:ponvizhijohn2906@gmail.com" className="heading-style-h6 color-paragraph footer_link">Write an email</Link></li>
                              <li className="global_list-item global_link-item"><Link href="https://wa.me/919840385621" className="heading-style-h6 color-paragraph footer_link">24/7 WhatsApp Chat</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="footer_Quicklink">
                     <ul role="list" className="global_list footer_links-list">
                              <li className="global_list-item global_link-item"><Link href="/freelance-web-developer-in-bangalore" className="heading-style-h6 color-paragraph footer_link">Freelance Web Developer in Bangalore</Link></li>
                           </ul>
                  </div>
                  <div className="footer_bottom">
                     
                     <div className="text-size-small is-caption">©2026 ponvizhiweb.com | All rights reserved.</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</footer>
</>
    );
}