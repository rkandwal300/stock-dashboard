import Dashboard from "./components/shared/Dashboard";
import NewsList from "./components/shared/News/NewsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList variant="primary">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="news">News</TabsTrigger>
        <TabsTrigger value="marketplace">Market Place</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <Dashboard />;
      </TabsContent>
      <TabsContent value="news">
        <NewsList />;
      </TabsContent>
    </Tabs>
  );
}

export default App;
