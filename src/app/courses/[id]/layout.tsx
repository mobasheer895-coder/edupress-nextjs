import CourseBannar from "@/components/course/courseBannar/CourseBannar"

export default function pagesLayout({
    children
}:Readonly<{
    children : React.ReactNode
}>) {
    return (
        <div>
                <section className="mt-13">
                    <CourseBannar
                        category="course"
                    />
                    {children}
                </section>
        </div>
    )
}