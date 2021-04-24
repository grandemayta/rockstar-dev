import { useRouter } from 'next/router';

const User = () => {
   const router = useRouter();
   const { id } = router.query;

  return (
    <h1>Page {id}</h1>
  );
};

export default User;