import Policy from "./Policy";
import './index.scss';
 
const PolicySection = ({ policies }) => {
  return (
    <section className='policies'>
      <div className='grid wide home__section d-flex'>
        {
          policies.length > 0 && policies.map((pol, index) => <Policy policy={pol} key={index}/>)
        }
      </div>
    </section>
  )
};

export default PolicySection;