const PageSection = ({ title, children, max = 'max-w-4xl' }) => (
  <section className={`mx-auto ${max} grid gap-8 rounded-3xl p-10 bg-[#870F11]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] border-4 border-[#FFD000]`}>
    {title && (
      <h1 className="text-4xl text-center font-black text-[#FFD000] tracking-widest drop-shadow-[0_2px_1px_#000]">
        {title}
      </h1>
    )}
    {children}
  </section>
)
export default PageSection
