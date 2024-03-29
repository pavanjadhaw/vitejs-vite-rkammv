import "./app.css";
import { Button, Form, Input, Layout } from "antd";
import sparklesLogo from "/sparkles.svg";
import { useState } from "preact/hooks";

export function App() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);

  const typewriterText = `In life, what we want often reflects our deepest aspirations and values. For some, it's about finding meaningful connections with others, cultivating relationships filled with love, understanding, and support. Others seek personal fulfillment through self-discovery, growth, and the pursuit of knowledge or creativity.

  Many aspire to make a positive impact on the world around them, whether through their careers, volunteer work, or advocacy for causes they believe in. Some yearn for adventure and exploration, seeking new experiences and challenges that broaden their horizons and enrich their lives.
  
  For others, happiness lies in simplicity – in moments of joy, laughter, and contentment found in the everyday moments shared with loved ones. Ultimately, what we want in life is a reflection of our unique journey, shaped by our experiences, passions, and the values that guide us. It's about finding purpose, fulfillment, and a sense of belonging in a world brimming with possibilities.
  
  `;

  const handleSubmit = () => {
    if (!typingStarted) {
      setTypingStarted(true);
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < typewriterText.length) {
            setText(typewriterText.substring(0, prevIndex + 1));
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 10);

      return () => clearInterval(interval);
    }
  };

  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form layout="vertical" autoComplete="off">
        <Form.Item
          name="Description"
          label={
            <span style={{ fontSize: "1.2em", fontWeight: 500 }}>
              What do you want in life?
            </span>
          }
          rules={[{ required: true }]}
          style={{
            margin: "0px",
          }}
        >
          <p
            style={{
              marginTop: "0px",
            }}
          >
            Providing a detailed description leads to great understanding of
            your life.
          </p>
          <Input.TextArea
            value={text}
            placeholder="Already have a description? Paste it here!"
            autoSize={{ minRows: 6, maxRows: 8 }}
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          />
        </Form.Item>
        <Form.Item
          style={{
            background: "#F4F2FD",
            color: "#662EDB",
            border: "1px solid #d9d9d9",
            borderBottom: "none",
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px 12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={sparklesLogo}
                class="logo"
                alt="Ai logo"
                style={{
                  paddingRight: "0.4em",
                  height: "2em",
                  transform: "rotate(90deg)",
                }}
              />
              <p>Use AI to generate a description</p>
            </div>
            <Button type="primary" htmlType="button" onClick={handleSubmit}>
              Generate with AI
            </Button>
          </div>
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <p>{text.length} / 100 minimum characters</p>
        </div>
      </Form>
    </Layout>
  );
}
