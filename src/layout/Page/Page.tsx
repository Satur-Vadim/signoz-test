import { Outlet } from 'react-router-dom';

function Page(): JSX.Element {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
}

export default Page;
