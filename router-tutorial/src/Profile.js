import { useParams } from 'react-router-dom';

const data = {
  Ssong: {
    name: '송진영',
    description: '노래잘하는 개발자',
  },
  JY: {
    name: '진영송',
    description: '영어잘함',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h3>사용자 프로필 </h3>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필~</p>
      )}
    </div>
  );
};

export default Profile;
