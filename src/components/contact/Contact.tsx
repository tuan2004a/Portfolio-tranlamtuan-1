import React from "react";

const Contact = () => {
    return (
        <div className="space-y-5">
            {/* gmail */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden bg-gradient-to-b from-red-700 to-red-900 rounded-lg p-5">
                <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/5">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="275" width="275" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                    </svg>
                </div>
                <div className="*:!text-red-300  z-50">
                    <h4 className="!m-0 !text-lg !font-semibold tracking-wide">Hãy liên hệ với tôi</h4>
                    <p className="text-xs !my-2">Liên hệ qua email để được giải đáp thắc mắc hoặc hợp tác</p>
                    <button type="submit" className="bg-red-300 rounded-md bg-opacity-85">
                        <a href="mailto:dev.lamtuan@gmail.com" target="_blank" className="z-10 cursor-pointer flex items-center justify-center gap-x-2 px-4 py-2 !text-black">
                            Đi đến Email
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                            </svg>
                        </a>
                    </button>
                </div>

                <div className="flex items-end justify-end">
                    <div className="rounded-2xl border-4 border-opacity-80 p-2 text-neutral-50 border-red-300">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* gmail */}

            {/* linkedin */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden bg-gradient-to-b from-sky-700 to-sky-900 rounded-lg p-5">
                <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/5">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="275" width="275" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                </div>
                
                <div className="*:!text-sky-300  z-50">
                    <h4 className="!m-0 !text-lg !font-semibold tracking-wide">Liên hệ qua LinkedIn</h4>
                    <p className="text-xs !my-2">Kết nối chuyên nghiệp để mở rộng mạng lưới và chia sẻ cơ hội việc làm</p>
                    <button className="bg-sky-300 rounded-md bg-opacity-85">
                        <a href="https://www.linkedin.com/in/lam-tuan-2072a4329/" target="_blank" className="flex items-center justify-center gap-x-2 px-4 py-2 !text-black">
                            Đi đến Linkedin
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                            </svg>
                        </a>
                    </button>
                </div>

                <div className="flex items-end justify-end">
                    <div className="rounded-2xl border-4 border-opacity-80 p-2 text-neutral-50 border-sky-300">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* linkedin */}

            {/* github */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg p-5">
                <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/5">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="275" width="275" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </div>
                
                <div className="*:!text-slate-400  z-50">
                    <h4 className="!m-0 !text-lg !font-semibold tracking-wide">Khám phá GitHub của tôi</h4>
                    <p className="text-xs !my-2">Xem các dự án mã nguồn mở và đóng góp ý tưởng cho sản phẩm của tôi.</p>
                    <button className="bg-slate-400 rounded-md bg-opacity-85">
                        <a href="https://github.com/tuan2004a" target="_blank" className="flex items-center justify-center gap-x-2 px-4 py-2 !text-black">
                            Đi đến Github
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                            </svg>
                        </a>
                    </button>
                </div>

                <div className="flex items-end justify-end">
                    <div className="rounded-2xl border-4 border-opacity-80 p-2 text-neutral-50 border-slate-400">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* github */}
        </div>
    );
};

export default Contact;
