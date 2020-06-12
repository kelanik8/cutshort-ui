import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from  './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
    <div className='main-wrapper main-wrapper-1'>
      <Navbar />
      <Sidebar />
      <div className='main-content'>
        <section className='section mt-4'>
          <div className="section-body">
            <div className='row'>
              <div className="col-12 col-sm-12 col-lg-12">
              <div className="card border">
                  <div className="card-header border-bottom">
                    <h4 className='text-dark text-light'>Daily Visitors</h4>
                    <div className="float-right ml-auto" style={{ display: 'inherit' }}>
                      <select className="custom-select mr-1" style={{ width: 'auto' }}>
                        <option>December</option>
                        <option>November</option>
                      </select>
                      <select className="custom-select ml-1">
                        <option>2018</option>
                        <option>2019</option>
                      </select>
                    </div>
                  </div>
                  <div className="card-body">
                    <canvas id="chart1" height="100"></canvas>
                  </div>
              </div>
            </div>
              <div className='col-12 col-sm-4 col-lg-3'>
                <div className="card border">
                  <div className='card-header text-center pb-0'>
                    <p className='text-muted text-center mb-0 m-auto'>
                      REALTIME USERS
                    </p>
                  </div>
                  <div className="card-body pt-0">
                    <h2 className='text-center'>56</h2>
                    <p className='text-center text-success'>
                      +9.8% <i className="fas fa-caret-up"></i>
                    </p>
                    <div className="sparkline-line-chart"></div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-4 col-lg-3'>
                <div className="card border">
                  <div className='card-header text-center pb-0'>
                    <p className='text-muted text-center mb-0 m-auto'>
                      TOTAL VISITS
                    </p>
                  </div>
                  <div className="card-body pt-0">
                    <h2 className='text-center'>54,598</h2>
                    <p className='text-center text-danger'>
                      -11.9% <i className="fas fa-caret-down"></i>
                    </p>
                    <div className="sparkline-line-chart"></div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-4 col-lg-3'>
                <div className="card border">
                  <div className='card-header text-center pb-0'>
                    <p className='text-muted text-center mb-0 m-auto'>
                      BOUNCE RATE
                    </p>
                  </div>
                  <div className="card-body pt-0">
                    <h2 className='text-center'>73.67%</h2>
                    <p className='text-center text-success'>
                      +12.2% <i className="fas fa-caret-up"></i>
                    </p>
                    <div className="sparkline-line-chart"></div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-4 col-lg-3'>
                <div className="card border">
                  <div className='card-header text-center pb-0'>
                    <p className='text-muted text-center mb-0 m-auto'>
                      VISIT DURATION
                    </p>
                  </div>
                  <div className="card-body pt-0">
                    <h2 className='text-center'>1m 4s</h2>
                    <p className='text-center text-success'>
                      +19.6% <i className="fas fa-caret-up"></i>
                    </p>
                    <div className="sparkline-line-chart"></div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-lg-8'>
                <div className="card border">
                  <div className="card-header">
                    <h4 className='text-dark'>Most Visited Pages</h4>
                  </div>
                  <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead>
                        <tr className='border-bottom text-light bg-white'>
                          <th className='bg-white'>PAGE NAME</th>
                          <th className='bg-white'></th>
                          <th className='bg-white'>VISITORS</th>
                          <th className='bg-white'>UNIQUE PAGE VISITS</th>
                          <th className='bg-white'>BOUNCE RATE</th>
                          <th className='bg-white'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                           <p className='text-muted'>/store/</p>
                          </td>
                          <td>
                            <i className="fas fa-external-link-alt"></i>
                          </td>
                          <td>
                            <p className='text-muted'>4,890</p>
                          </td>
                          <td>
                           <p className='text-muted'>3,985</p>
                          </td>
                          <td>
                           <p className='text-muted'>81.56 %</p>
                          </td>
                          <td>
                           <img src='/assets/img/small-chart.svg' />
                          </td>
                        </tr>
                        <tr>
                          <td>
                           <p className='text-muted'>/store/symbol-styleguides</p>
                          </td>
                          <td>
                            <i className="fas fa-external-link-alt"></i>
                          </td>
                          <td>
                            <p className='text-muted'>3,785</p>
                          </td>
                          <td>
                           <p className='text-muted'>3,182</p>
                          </td>
                          <td>
                           <p className='text-muted'>62.56 %</p>
                          </td>
                          <td>
                           <img src='/assets/img/small-chart.svg' />
                          </td>
                        </tr>
                        <tr>
                          <td>
                           <p className='text-muted'>/store/dashboard-ui-kit</p>
                          </td>
                          <td>
                            <i className="fas fa-external-link-alt"></i>
                          </td>
                          <td>
                            <p className='text-muted'>2,985</p>
                          </td>
                          <td>
                           <p className='text-muted'>2,115</p>
                          </td>
                          <td>
                           <p className='text-muted'>58.76 %</p>
                          </td>
                          <td>
                           <img src='/assets/img/small-chart.svg' />
                          </td>
                        </tr>
                        <tr>
                          <td>
                           <p className='text-muted'>/store/webflow-cards.html</p>
                          </td>
                          <td>
                            <i className="fas fa-external-link-alt"></i>
                          </td>
                          <td>
                            <p className='text-muted'>2,440</p>
                          </td>
                          <td>
                           <p className='text-muted'>1,789</p>
                          </td>
                          <td>
                           <p className='text-muted'>39.59 %</p>
                          </td>
                          <td>
                           <img src='/assets/img/small-chart.svg' />
                          </td>
                        </tr>
                     
                      </tbody>
                    </table>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card border">
                  <div className="card-header">
                    <h4 className='text-dark'>Social Media Traffic</h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive overflow-hidden">
                      <table className="table table">
                        <tbody><tr className='border-bottom'>
                          <th>Network</th>
                          <th>Visitors</th>
                        </tr>
                        <tr>
                          <td>Instagram</td>
                          <td className="row align-center">
                            <p className='col'>3,550</p>
                            <div className='col'>
                              <div className="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="100%" style={{ height: '4px' }}>
                                <div className="progress-bar bg-primary" data-width="100" style={{ width: '100px' }}></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Facebook</td>
                          <td className="row align-center">
                            <p className='col'>2,236</p>
                            <div className='col'>
                              <div className="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="100%" style={{ height: '4px' }}>
                                <div className="progress-bar bg-primary" data-width="100" style={{ width: '100px' }}></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Twitter</td>
                          <td className="row align-center">
                            <p className='col'>1,795</p>
                            <div className='col'>
                              <div className="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="100%" style={{ height: '4px' }}>
                                <div className="progress-bar bg-primary" data-width="100" style={{ width: '100px' }}></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>LinkedIn</td>
                          <td className="row align-center">
                            <p className='col'>62</p>
                            <div className='col'>
                              <div className="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="100%" style={{ height: '4px' }}>
                                <div className="progress-bar bg-primary" data-width="100" style={{ width: '100px' }}></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export default App;
