import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import Ecommerce from "./pages/Ecommerce";
import Calendar from "./pages/Calendar";
import Mail from "./pages/Mail";
import Chat from "./pages/Chat";
import Projects from "./pages/Projects";
import FileManager from "./pages/FileManager";
import Notes from "./pages/Notes";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Layout */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/task"
          element={
            <MainLayout>
              <Task />
            </MainLayout>
          }
        />

        <Route
          path="/ecommerce"
          element={
            <MainLayout>
              <Ecommerce />
            </MainLayout>
          }
        />

        <Route
          path="/calendar"
          element={
            <MainLayout>
              <Calendar />
            </MainLayout>
          }
        />

        <Route
          path="/mail"
          element={
            <MainLayout>
              <Mail />
            </MainLayout>
          }
        />

        <Route
          path="/chat"
          element={
            <MainLayout>
              <Chat />
            </MainLayout>
          }
        />

        <Route
          path="/projects"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />

        <Route
          path="/file-manager"
          element={
            <MainLayout>
              <FileManager />
            </MainLayout>
          }
        />

        <Route
          path="/notes"
          element={
            <MainLayout>
              <Notes />
            </MainLayout>
          }
        />

        <Route
          path="/contacts"
          element={
            <MainLayout>
              <Contacts />
            </MainLayout>
          }
        />

        <Route
          path="/ecommerce/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />

        <Route
          path="/ecommerce/orders"
          element={
            <MainLayout>
              <Orders />
            </MainLayout>
          }
        />

        <Route
          path="/ecommerce/customers"
          element={
            <MainLayout>
              <Customers />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}