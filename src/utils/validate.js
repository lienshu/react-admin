// 暴露一个验证password的变量出去,这里的变量就是一个验证规则
export const validate_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;