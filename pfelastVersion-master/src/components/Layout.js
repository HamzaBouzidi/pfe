import React from 'react'

const Layout = () => {
  return (
  <div  >
     {/* Start Content*/}
<div className="container-fluid">
  {/* start page title */}
  <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <div className="page-title-right">
          <form className="d-flex">
            <div className="input-group">
              <input type="text" className="form-control form-control-light" id="dash-daterange" />
              <span className="input-group-text bg-primary border-primary text-white">
                <i className="mdi mdi-calendar-range font-13" />
              </span>
            </div>
            <a href="javascript: void(0);" className="btn btn-primary ms-2">
              <i className="mdi mdi-autorenew" />
            </a>
            <a href="javascript: void(0);" className="btn btn-primary ms-1">
              <i className="mdi mdi-filter-variant" />
            </a>
          </form>
        </div>
        <h4 className="page-title">Dashboard</h4>
      </div>
    </div>
  </div>
  {/* end page title */}
  <div className="row">
    <div className="col-xl-5 col-lg-6">
      <div className="row">
        <div className="col-lg-6">
          <div className="card widget-flat">
            <div className="card-body">
              <div className="float-end">
                <i className="mdi mdi-account-multiple widget-icon" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Number of Customers">Customers</h5>
              <h3 className="mt-3 mb-3">36,254</h3>
              <p className="mb-0 text-muted">
                <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 5.27%</span>
                <span className="text-nowrap">Since last month</span>  
              </p>
            </div> {/* end card-body*/}
          </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-lg-6">
          <div className="card widget-flat">
            <div className="card-body">
              <div className="float-end">
                <i className="mdi mdi-cart-plus widget-icon" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Orders</h5>
              <h3 className="mt-3 mb-3">5,543</h3>
              <p className="mb-0 text-muted">
                <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> 1.08%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div> {/* end card-body*/}
          </div> {/* end card*/}
        </div> {/* end col*/}
      </div> {/* end row */}
      <div className="row">
        <div className="col-lg-6">
          <div className="card widget-flat">
            <div className="card-body">
              <div className="float-end">
                <i className="mdi mdi-currency-usd widget-icon" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
              <h3 className="mt-3 mb-3">$6,254</h3>
              <p className="mb-0 text-muted">
                <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> 7.00%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div> {/* end card-body*/}
          </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-lg-6">
          <div className="card widget-flat">
            <div className="card-body">
              <div className="float-end">
                <i className="mdi mdi-pulse widget-icon" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Growth">Growth</h5>
              <h3 className="mt-3 mb-3">+ 30.56%</h3>
              <p className="mb-0 text-muted">
                <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 4.87%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div> {/* end card-body*/}
          </div> {/* end card*/}
        </div> {/* end col*/}
      </div> {/* end row */}
    </div> {/* end col */}
    <div className="col-xl-7 col-lg-6">
      <div className="card card-h-100">
        <div className="card-body">
          <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Profit</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Action</a>
            </div>
          </div>
          <h4 className="header-title mb-3">Projections Vs Actuals</h4>
          <div dir="ltr">
            <div id="high-performing-product" className="apex-charts" data-colors="#727cf5,#e3eaef" />
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col */}
  </div>
  {/* end row */}
  <div className="row">
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Profit</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Action</a>
            </div>
          </div>
          <h4 className="header-title mb-3">Revenue</h4>
          <div className="chart-content-bg">
            <div className="row text-center">
              <div className="col-md-6">
                <p className="text-muted mb-0 mt-3">Current Week</p>
                <h2 className="fw-normal mb-3">
                  <small className="mdi mdi-checkbox-blank-circle text-primary align-middle me-1" />
                  <span>$58,254</span>
                </h2>
              </div>
              <div className="col-md-6">
                <p className="text-muted mb-0 mt-3">Previous Week</p>
                <h2 className="fw-normal mb-3">
                  <small className="mdi mdi-checkbox-blank-circle text-success align-middle me-1" />
                  <span>$69,524</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="dash-item-overlay d-none d-md-block" dir="ltr">
            <h5>Today's Earning: $2,562.30</h5>
            <p className="text-muted font-13 mb-3 mt-2">Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
              Etiam rhoncus...</p>
            <a href="javascript: void(0);" className="btn btn-outline-primary">View Statements
              <i className="mdi mdi-arrow-right ms-2" />
            </a>
          </div>
          <div dir="ltr">
            <div id="revenue-chart" className="apex-charts mt-3" data-colors="#727cf5,#0acf97" />
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Profit</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Action</a>
            </div>
          </div>
          <h4 className="header-title">Revenue By Location</h4>
          <div className="mb-4 mt-4">
            <div id="world-map-markers" style={{height: 224}} />
          </div>
          <h5 className="mb-1 mt-0 fw-normal">New York</h5>
          <div className="progress-w-percent">
            <span className="progress-value fw-bold">72k </span>
            <div className="progress progress-sm">
              <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <h5 className="mb-1 mt-0 fw-normal">San Francisco</h5>
          <div className="progress-w-percent">
            <span className="progress-value fw-bold">39k </span>
            <div className="progress progress-sm">
              <div className="progress-bar" role="progressbar" style={{width: '39%'}} aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <h5 className="mb-1 mt-0 fw-normal">Sydney</h5>
          <div className="progress-w-percent">
            <span className="progress-value fw-bold">25k </span>
            <div className="progress progress-sm">
              <div className="progress-bar" role="progressbar" style={{width: '39%'}} aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <h5 className="mb-1 mt-0 fw-normal">Singapore</h5>
          <div className="progress-w-percent mb-0">
            <span className="progress-value fw-bold">61k </span>
            <div className="progress progress-sm">
              <div className="progress-bar" role="progressbar" style={{width: '61%'}} aria-valuenow={61} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
  </div>
  {/* end row */}
  <div className="row">
    <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
      <div className="card">
        <div className="card-body">
          <a href className="btn btn-sm btn-link float-end">Export
            <i className="mdi mdi-download ms-1" />
          </a>
          <h4 className="header-title mt-2 mb-3">Top Selling Products</h4>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap table-hover mb-0">
              <tbody>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">ASOS Ridley High Waist</h5>
                    <span className="text-muted font-13">07 April 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$79.49</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">82</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$6,518.18</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Marco Lightweight Shirt</h5>
                    <span className="text-muted font-13">25 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$128.50</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">37</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$4,754.50</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Half Sleeve Shirt</h5>
                    <span className="text-muted font-13">17 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$39.99</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">64</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$2,559.36</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Lightweight Jacket</h5>
                    <span className="text-muted font-13">12 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$20.00</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">184</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
                    <span className="text-muted font-13">05 March 2018</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$28.49</h5>
                    <span className="text-muted font-13">Price</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">69</h5>
                    <span className="text-muted font-13">Quantity</span>
                  </td>
                  <td>
                    <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
                    <span className="text-muted font-13">Amount</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> {/* end table-responsive*/}
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
    <div className="col-xl-3 col-lg-6 order-lg-1">
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Profit</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Action</a>
            </div>
          </div>
          <h4 className="header-title">Total Sales</h4>
          <div id="average-sales" className="apex-charts mb-4 mt-4" data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00" />
          <div className="chart-widget-list">
            <p>
              <i className="mdi mdi-square text-primary" /> Direct
              <span className="float-end">$300.56</span>
            </p>
            <p>
              <i className="mdi mdi-square text-danger" /> Affilliate
              <span className="float-end">$135.18</span>
            </p>
            <p>
              <i className="mdi mdi-square text-success" /> Sponsored
              <span className="float-end">$48.96</span>
            </p>
            <p className="mb-0">
              <i className="mdi mdi-square text-warning" /> E-mail
              <span className="float-end">$154.02</span>
            </p>
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
    <div className="col-xl-3 col-lg-6 order-lg-1">
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Profit</a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">Action</a>
            </div>
          </div>
          <h4 className="header-title mb-2">Recent Activity</h4>
          <div data-simplebar style={{maxHeight: 419}}> 
            <div className="timeline-alt pb-0">
              <div className="timeline-item">
                <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
                <div className="timeline-item-info">
                  <a href="#" className="text-info fw-bold mb-1 d-block">You sold an item</a>
                  <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                  <p className="mb-0 pb-2">
                    <small className="text-muted">5 minutes ago</small>
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
                <div className="timeline-item-info">
                  <a href="#" className="text-primary fw-bold mb-1 d-block">Product on the Bootstrap Market</a>
                  <small>Dave Gamache added
                    <span className="fw-bold">Admin Dashboard</span>
                  </small>
                  <p className="mb-0 pb-2">
                    <small className="text-muted">30 minutes ago</small>
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
                <div className="timeline-item-info">
                  <a href="#" className="text-info fw-bold mb-1 d-block">Robert Delaney</a>
                  <small>Send you message
                    <span className="fw-bold">"Are you there?"</span>
                  </small>
                  <p className="mb-0 pb-2">
                    <small className="text-muted">2 hours ago</small>
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon" />
                <div className="timeline-item-info">
                  <a href="#" className="text-primary fw-bold mb-1 d-block">Audrey Tobey</a>
                  <small>Uploaded a photo
                    <span className="fw-bold">"Error.jpg"</span>
                  </small>
                  <p className="mb-0 pb-2">
                    <small className="text-muted">14 hours ago</small>
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
                <div className="timeline-item-info">
                  <a href="#" className="text-info fw-bold mb-1 d-block">You sold an item</a>
                  <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                  <p className="mb-0 pb-2">
                    <small className="text-muted">16 hours ago</small>
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
                <div className="timeline-item-info">
                  <a href="#" className="text-primary fw-bold mb-1 d-block">Product on the Bootstrap Market</a>
                  <small>Dave Gamache added
                    <span className="fw-bold">Admin Dashboard</span>
                  </small>
                  <p className="mb-0 pb-2">
                    <small className="text-muted">22 hours ago</small>
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
                <div className="timeline-item-info">
                  <a href="#" className="text-info fw-bold mb-1 d-block">Robert Delaney</a>
                  <small>Send you message
                    <span className="fw-bold">"Are you there?"</span>
                  </small>
                  <p className="mb-0 pb-2">
                    <small className="text-muted">2 days ago</small>
                  </p>
                </div>
              </div>
            </div>
            {/* end timeline */}
          </div> {/* end slimscroll */}
        </div>
        {/* end card-body */}
      </div>
      {/* end card*/}
    </div>
    {/* end col */}
  </div>
  {/* end row */}
</div>
{/* container */}

    </div>
  )
}

export default Layout
