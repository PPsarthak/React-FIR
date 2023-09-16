import './App.css';
import CommissionerDashboard from './CommDash';
import AllCases from './allCasesTable';
import CaseTable from './searchBar';
import CaseTableS from './CaseTableS';
function App() {
  return (
    <>
    <CommissionerDashboard/>
    {/* <AllCases/> */}
    <CaseTableS/>
    </>
  )
}

export default App;

/*
The line " import CommissionerDashboard from './CommDash'; " is importing a function CommissionerDashboard from the path. 
If you want to see Commissioner Dashboard - Just use <CommisssionerDashboard/> tag

All the CSS is written in App.css

*/