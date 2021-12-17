import React from 'react';
import ReduxToastr from 'react-redux-toastr';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './App.css';

import store from '@state/redux-store';
import ProviderWrapper from '@state/provider.component';
import PageRoot from '@pages/root.component';
import MainNavigation from '@pages/navigation/navigation.component';

import { Toaster, ToastBar } from 'react-hot-toast';
import SideBarNavigation from '@pages/navigation/sidebar.component';

const App: React.FC = () => {

  return (
    <ProviderWrapper store={store}>

        {/* <MainNavigation />

        <div className="container mt-3">

          <PageRoot />

        </div> */}

      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">arthr</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">Sign out</a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          
          <SideBarNavigation />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

            <PageRoot />

          </main>
        </div>
      </div>

      <ReduxToastr 
        timeOut={3000} 
        preventDuplicates 
        position="bottom-right" 
        transitionIn="fadeIn" 
        transitionOut="fadeOut" 
        closeOnToastrClick progressBar />

      <Toaster>
        {
          (t) => (
            <ToastBar toast={t}>
              {
                ({ icon, message }) => (
                  <>
                    {icon}
                    {message} boooooo
                  </>
                )
              }
            </ToastBar>
          )
        }
      </Toaster>

    </ProviderWrapper>
  );
}

export default App;