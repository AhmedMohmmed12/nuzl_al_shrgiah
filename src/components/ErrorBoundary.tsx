import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "2rem",
            fontFamily: "sans-serif",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          <h1>حدث خطأ في تحميل التطبيق</h1>
          <p style={{ color: "#ef4444", marginTop: "1rem" }}>
            {this.state.error?.message || "خطأ غير معروف"}
          </p>
          <details style={{ marginTop: "1rem", textAlign: "right" }}>
            <summary>تفاصيل الخطأ</summary>
            <pre
              style={{
                background: "#1f2937",
                color: "#f3f4f6",
                padding: "1rem",
                borderRadius: "0.5rem",
                overflow: "auto",
                marginTop: "0.5rem",
              }}
            >
              {this.state.error?.stack}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
            }}
          >
            إعادة تحميل الصفحة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

