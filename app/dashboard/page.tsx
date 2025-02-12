"use client"
import Navbar from "../header/page";
import Sidenav from "../sidebar/page";
import { BarChart, LineChart, XAxis, YAxis, Bar, Line, Tooltip} from "recharts";

const dashboardPage = () => {
    const data = [
        {date: "1/11/24", sale: 100},
        {date: "2/11/24", sale: 140},
        {date: "3/11/24", sale: 180},
        {date: "4/11/24", sale: 200},
        {date: "5/11/24", sale: 180},
        {date: "6/11/24", sale: 100},
        {date: "7/11/24", sale: 65},
    ];

    return (
        <div style={{
            height: "100%",
            backgroundColor: "white",
        }}>
            <Navbar/>
            
            <div style={{
                display: "flex",
                color: "black",
            }}>
                
                    <Sidenav/>
                
                <div style={{
                    margin:"16px",
                }}>
                    <div style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        backgroundColor: "#d1d1d1",
                        padding: "8px",
                        borderRadius: "12px",
                        marginBottom: "25px",
                        width: "170px",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)"

                    }}>
                        Dashboard
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "50px",
                    }}>
                    <div style={{
                        padding: "8px",
                        backgroundColor: "#d1d1d1",
                        borderRadius: "12px",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)"
                    }}>
                        <BarChart width={600} height={400} data={data}>
                            <XAxis dataKey="date"/>
                            <YAxis dataKey="sale"/>
                            <Bar dataKey="sale" barSize={25} />
                            <Tooltip/>
                        </BarChart>
                    </div>
                    <div style={{
                        padding: "8px",
                        backgroundColor: "#d1d1d1",
                        borderRadius: "12px",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)"
                    }}>
                        <LineChart width={600} height={400} data={data}>
                            <XAxis dataKey="date"/>
                            <YAxis dataKey="sale"/>
                            <Line dataKey="sale" type="monotone" />
                            <Tooltip/>
                        </LineChart>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default dashboardPage;