import React from 'react';
import "../styles/RequirementDesc.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const RequirementDesc = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('internshipReq');
  };
  return (
    <div className='desc'>
        <div className='content'>
            <div className='header'>
                <h1>Description</h1>
            </div>
            <div className='body'>
                <div className='logo-container'>
                    <img src={logo} className='logo' alt="logo" />
                </div>
                <p className='detailed-desc'>Lorem ipsum dolor sit amet. Aut explicabo Quis est minus eaque aut fugit galisum eos distinctio velit est voluptate natus. 
                Cum voluptatum quidem et quisquam tempore et autem mollitia qui galisum laborum. Et similique velit sit optio quia vel voluptatem Quis non amet exercitationem ut enim modi non quisquam Quis. 
                Eum omnis magnam et minus dignissimos et aliquam commodi et nihil consequatur et dignissimos temporibus. Cum Quis atque ab facere itaque ut quasi facere sit autem exercitationem hic commodi 
                neque ab alias impedit ea perferendis omnis. In laudantium autem est molestias quasi aut dolor odit aut maiores similique. Sit rerum ipsam qui molestias reiciendis quo sint adipisci. 
                Sed debitis optio ut rerum neque ad optio laudantium qui quia possimus qui maiores nihil! Qui exercitationem officia aut ratione quia id cupiditate repudiandae ad voluptas enim At laboriosam voluptas.
                </p>
                <button className='back-button' onClick={handleGoBack}>
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-back">Back</div>
                </div>
                </button>
            </div>
        </div>
    </div>
  );
};

export default RequirementDesc;
