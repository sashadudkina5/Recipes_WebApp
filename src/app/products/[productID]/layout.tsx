export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <p> this is product layout</p>
            {children}
        </div>
    )
  }