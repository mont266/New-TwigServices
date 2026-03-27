import { ArrowUpRight } from 'lucide-react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[3px] select-none ${className}`}>
      <div className="flex items-end gap-2">
        <div className="flex gap-[3px]">
          <div className="w-9 h-9 bg-[#4a6ee0] flex items-center justify-center text-white font-normal text-2xl leading-none">T</div>
          <div className="w-9 h-9 bg-[#4a6ee0] flex items-center justify-center text-white font-normal text-2xl leading-none">S</div>
        </div>
        <div className="text-[#4a6ee0] text-[22px] font-light tracking-wide leading-none pb-1">TWIG SERVICES</div>
      </div>
      <div className="w-full h-[2px] bg-[#9fb4d4]"></div>
      <div className="flex items-start gap-2">
        <div className="flex gap-[3px]">
          <div className="w-9 h-9 bg-[#9fb4d4] flex items-center justify-center text-white">
            <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <div className="w-9 h-9 bg-[#4a6ee0] flex items-center justify-center text-white font-normal text-2xl leading-none">L</div>
        </div>
        <div className="text-[#4a6ee0] text-[22px] font-light tracking-wide leading-none pt-1">LIMITED</div>
      </div>
    </div>
  );
}
