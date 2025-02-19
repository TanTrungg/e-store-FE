export const validateEmail = (email: string | null) => {
  if (email !== null) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }
};

export const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return "";
  phoneNumber = phoneNumber.replace(/\D/g, "").slice(0, 10); // Chỉ lấy 10 số đầu tiên

  return phoneNumber.replace(
    /(\d{0,4})(\d{0,3})(\d{0,3})/,
    (_match, p1, p2, p3) => {
      let result = p1;
      if (p2) result += " " + p2;
      if (p3) result += " " + p3;
      return result.trim(); // Xóa khoảng trắng dư thừa khi chưa đủ số
    }
  );
};
