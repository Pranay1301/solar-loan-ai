import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, TrendingUp, Zap, Calendar, CheckCircle } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";

interface DashboardProps {
  onBack: () => void;
}

const Dashboard = ({ onBack }: DashboardProps) => {
  // Sample data for charts
  const emiBreakdownData = [
    { name: "Principal", value: 180000, color: "hsl(var(--primary))" },
    { name: "Interest", value: 70000, color: "hsl(var(--secondary))" },
  ];

  const roiData = [
    { year: "Year 1", savings: 24000, cumulative: 24000 },
    { year: "Year 5", savings: 120000, cumulative: 120000 },
    { year: "Year 10", savings: 240000, cumulative: 360000 },
    { year: "Year 15", savings: 360000, cumulative: 720000 },
    { year: "Year 20", savings: 480000, cumulative: 1200000 },
    { year: "Year 25", savings: 600000, cumulative: 1800000 },
  ];

  const monthlyScheduleData = [
    { month: "Jan", emi: 22500, principal: 13500, interest: 9000 },
    { month: "Feb", emi: 22500, principal: 13600, interest: 8900 },
    { month: "Mar", emi: 22500, principal: 13700, interest: 8800 },
    { month: "Apr", emi: 22500, principal: 13800, interest: 8700 },
    { month: "May", emi: 22500, principal: 13900, interest: 8600 },
    { month: "Jun", emi: 22500, principal: 14000, interest: 8500 },
  ];

  const energyProductionData = [
    { month: "Jan", production: 420 },
    { month: "Feb", production: 450 },
    { month: "Mar", production: 520 },
    { month: "Apr", production: 580 },
    { month: "May", production: 620 },
    { month: "Jun", production: 600 },
    { month: "Jul", production: 580 },
    { month: "Aug", production: 560 },
    { month: "Sep", production: 540 },
    { month: "Oct", production: 500 },
    { month: "Nov", production: 450 },
    { month: "Dec", production: 420 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero border-b">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Loan Dashboard</h1>
              <p className="text-muted-foreground">Application ID: SL-2025-00142</p>
            </div>
            <Button className="gradient-solar">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 border-success/20 hover:shadow-strong transition-elegant">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
            </div>
            <p className="text-3xl font-bold text-success">Approved</p>
            <p className="text-sm text-muted-foreground mt-1">Credit Score: 87/100</p>
          </Card>

          <Card className="p-6 border-2 border-primary/20 hover:shadow-strong transition-elegant">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Loan Amount</p>
            </div>
            <p className="text-3xl font-bold">₹2,50,000</p>
            <p className="text-sm text-muted-foreground mt-1">3.5 kW Solar System</p>
          </Card>

          <Card className="p-6 border-2 border-secondary/20 hover:shadow-strong transition-elegant">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Monthly EMI</p>
            </div>
            <p className="text-3xl font-bold">₹22,500</p>
            <p className="text-sm text-muted-foreground mt-1">10 years @ 8.5%</p>
          </Card>

          <Card className="p-6 border-2 border-accent/20 hover:shadow-strong transition-elegant">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">25-Year ROI</p>
            </div>
            <p className="text-3xl font-bold text-accent">620%</p>
            <p className="text-sm text-muted-foreground mt-1">Payback: 6.2 years</p>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">EMI Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={emiBreakdownData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ₹${(value / 1000).toFixed(0)}k`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {emiBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `₹${value.toLocaleString("en-IN")}`} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Monthly Payment Schedule</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyScheduleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => `₹${value.toLocaleString("en-IN")}`} />
                <Legend />
                <Line type="monotone" dataKey="principal" stroke="hsl(var(--primary))" strokeWidth={2} />
                <Line type="monotone" dataKey="interest" stroke="hsl(var(--secondary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">25-Year ROI Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value: number) => `₹${(value / 1000).toFixed(0)}k`} />
                <Legend />
                <Bar dataKey="cumulative" fill="hsl(var(--accent))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Energy Production Forecast</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyProductionData}>
                <defs>
                  <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => `${value} kWh`} />
                <Area type="monotone" dataKey="production" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorProduction)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Subsidy Information */}
        <Card className="p-6 bg-gradient-hero border-2 border-accent/20">
          <h3 className="text-xl font-bold mb-4">Subsidy Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">PM Surya Ghar Subsidy</p>
              <p className="text-3xl font-bold text-accent mt-1">₹78,000</p>
              <p className="text-sm text-muted-foreground mt-1">3+ kW system</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Effective Loan Amount</p>
              <p className="text-3xl font-bold text-primary mt-1">₹1,72,000</p>
              <p className="text-sm text-muted-foreground mt-1">After subsidy</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Savings (25 Years)</p>
              <p className="text-3xl font-bold text-secondary mt-1">₹18,00,000</p>
              <p className="text-sm text-muted-foreground mt-1">Including subsidy</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
