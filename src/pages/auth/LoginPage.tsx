import { RegisterState } from "@/types/auth/AuthTypes";
import React, { useState } from "react";
import { FaLock, FaMailBulk, FaPhoneAlt, FaRegUser } from "react-icons/fa";
import BannerLogin from "@/assets/banner-login.jpg";
import { showSuccessAlert } from "@/toastify/toastify";
import { useDispatch } from "react-redux";
import { CreateUser } from "@/redux/actions/userAction";
import { formatPhoneNumber, validateEmail } from "@/utils/helpers";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState<boolean>(true);
  const [userLogin, setUserLogin] = useState({
    email: null,
    password: null,
  });
  const [register, setRegister] = useState({
    reEmail: "",
    rePassword: "",
    reFullName: "",
    rePhoneNumber: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "reEmail" || name === "email") {
      setErrors((prev) => ({ ...prev, [name]: !validateEmail(value) }));
    }
    if (isLogin) {
      setUserLogin({ ...userLogin, [name]: value });
    } else {
      setRegister({ ...register, [name]: value });
    }
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { [key: string]: boolean } = {};
    if (isLogin) {
      Object.entries(userLogin).forEach(([key, value]) => {
        if (!value) newErrors[key] = true;
      });
    } else {
      Object.entries(register).forEach(([key, value]) => {
        if (!value) newErrors[key] = true;
      });
      if (register.confirmPassword !== register.rePassword) {
        newErrors["confirmPassword"] = true;
      }
      if (!validateEmail(register.reEmail)) {
        newErrors["reEmail"] = true;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isLogin) {
      console.log("data-login", userLogin);
      showSuccessAlert("Đăng nhập thành công");
    } else {
      const registerUser: RegisterState = {
        email: register.reEmail,
        password: register.rePassword,
        fullName: register.reFullName,
        phoneNumber: register.rePhoneNumber,
      };
      console.log("data-register", registerUser);
      dispatch(CreateUser(registerUser));
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BannerLogin})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-lg p-6 m-2 bg-white rounded-lg shadow-lg">
        {/* Tiêu đề */}
        <h2 className="text-3xl font-semibold text-center text-gray-700">
          {isLogin ? "Đăng nhập" : "Đăng ký tài khoản"}
        </h2>
        <hr className="my-5" />
        {/* Login Form */}
        <div
          className={`transition-all duration-500 ${
            isLogin
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-90 translate-x-5 hidden"
          }`}
        >
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="" className="block my-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-violet-400 pl-10 ${
                    errors.email ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Nhập email"
                  name="email"
                  onChange={handleChange}
                />
                <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">Vui lòng nhập email</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="" className="block my-1">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-violet-400 pl-10 ${
                    errors.password ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Nhập password"
                  name="password"
                  onChange={handleChange}
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">Vui lòng nhập mật khẩu</p>
              )}
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div
          className={`transition-all duration-500 ${
            !isLogin
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-90 -translate-x-5 hidden"
          }`}
        >
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="" className="block my-1">
                Họ tên
              </label>
              <div className="relative">
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-violet-400 pl-10 ${
                    errors.reFullName ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Họ và tên"
                  name="reFullName"
                  onChange={handleChange}
                />
                <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.reFullName && (
                <p className="text-red-500 text-sm">Vui lòng nhập tên</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="" className="block my-1">
                Số điện thoại
              </label>
              <div className="relative">
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-violet-400 pl-10 ${
                    errors.rePhoneNumber ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Số điện thoại"
                  name="rePhoneNumber"
                  onChange={handleChange}
                  value={formatPhoneNumber(register.rePhoneNumber)}
                />
                <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.rePhoneNumber && (
                <p className="text-red-500 text-sm">
                  Vui lòng nhập số điện thoại
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="" className="block my-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-violet-400 pl-10 ${
                    errors.reEmail ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Email"
                  name="reEmail"
                  onChange={handleChange}
                />
                <FaMailBulk className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.reEmail && (
                <p className="text-red-500 text-sm">Vui lòng nhập email</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="" className="block my-1">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-violet-400 pl-10 ${
                    errors.rePassword ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Mật khẩu"
                  name="rePassword"
                  onChange={handleChange}
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.rePassword && (
                <p className="text-red-500 text-sm">Vui lòng nhập mật khẩu</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="" className="block my-1">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-violet-400 pl-10 ${
                    errors.confirmPassword ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Xác nhận mật khẩu"
                  name="confirmPassword"
                  onChange={handleChange}
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">Mật khẩu chưa khớp</p>
              )}
            </div>
          </div>
        </div>

        {/* Nút Submit */}
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-3 mt-4 font-bold text-white bg-violet-500 rounded-md hover:bg-violet-700 hover:scale-x-105 transition-all"
        >
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </button>

        {/* Chuyển đổi giữa Login/Register */}
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
          <button
            onClick={() => setLogin(!isLogin)}
            className="ml-1 text-violet-500 hover:underline"
          >
            {isLogin ? "Đăng ký ngay" : "Đăng nhập ngay"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
