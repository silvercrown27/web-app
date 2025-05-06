import Chart from "react-google-charts";

const DashboardContent = () => {
    const number = 8;
    const PieChartData = [
        ["Task", "Hours per day"],
        ["Work", number],
        ["Lunch", 1],
        ["Leisure", 4],
        ["sleep", 6],
    ]

    const pieChartOptions = {
        title: "My daily activites",
    }

    const BarChartData = [
        ["Year", "Sales", "Expenses"],
        ["2019", 1000, 500],
        ["2021", 2000, 1200],
        ["2023", 3000, 2000],
        ["2025", 2500, 1800],
    ]

    const barChartOptions = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales and expenses from (2019 - 2025)"
        }
    }

    const lineChartData = [
        ["Year", "Sales", "Expenses"],
        ["2019", 1000, 500],
        ["2021", 2000, 1200],
        ["2023", 3000, 2000],
        ["2025", 2500, 1800],
    ]

    const lineChartOptions = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales and expenses from (2019 - 2025)"
        }
    }
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8"> 
            <div className="bg-white rounded-4xl shadow-2xl"> 
                <Chart 
                    chartType="PieChart"
                    width='100%'
                    height='300px'
                    data={PieChartData}
                    options={pieChartOptions}/>
            </div>

            <div className="bg-white rounded-4xl shadow-2xl"> 
                <Chart 
                    chartType="Bar"
                    width='100%'
                    height='300px'
                    data={BarChartData}
                    options={barChartOptions}/>
            </div>

            <div className="bg-white rounded-4xl shadow-2xl"> 
                <Chart 
                    chartType="LineChart"
                    width='100%'
                    height='300px'
                    data={lineChartData}
                    options={lineChartOptions}/>
            </div>
        </div>
    )
}

export default DashboardContent;