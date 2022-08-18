import bcrypt from "bcryptjs";

export const encryption = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}
