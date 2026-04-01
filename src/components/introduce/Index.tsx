'use client';
import HeroSection from "./HeroSection"

const Index = () => {
    return (
		<div className=" gap-20">
			<div className="w-full">
				<HeroSection />
			</div>
			<h3 className="mt-15! !font-semibold !text-white relative after:absolute after:w-18 after:h-[3px] after:bg-[#3452ff] after:-bottom-1 after:left-0">Về bản thân</h3>
			<div className="text-white">
				<p>Là một sinh viên mới vừa ra trường và có niểm đam mê lập trình và luôn hướng tới việc tạo ra những trải nghiệm mượt mà, dễ sử dụng và giải quyết vấn đề thực tế. Dù hiện tại chỉ có một số dự án cá nhân nhỏ, nhưng mỗi dự án đều là cơ hội để thực hành và học hỏi những công nghệ mới. Từ việc xây dựng website, ứng dụng web đến những tính năng nhỏ nhưng hữu ích, tôi luôn cố gắng viết code sạch, dễ bảo trì và tập trung vào trải nghiệm người dùng. Tôi tin rằng code không chỉ đẹp mà còn phải thực sự mang lại giá trị.  </p>
			</div>
		</div>
	);
}

export default Index
