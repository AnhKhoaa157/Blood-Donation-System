import { Editor } from "@tinymce/tinymce-react";
import { TINYMCE_API_KEY } from "../lib/config/env";

interface RichTextEditorProps {
  value?: string;
  onChange: (html: string) => void;
  height?: number;
}

export default function RichTextEditor({ value, onChange, height = 320 }: RichTextEditorProps) {
  return (
    <Editor
      apiKey={TINYMCE_API_KEY}
      initialValue={value}
      init={{
        height,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        content_style: "body { font-family: Segoe UI, Arial, sans-serif; font-size: 14px }",
      }}
      onEditorChange={onChange}
    />
  );
}
