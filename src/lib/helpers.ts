// Function to create JSX elements from the WYSIWYG content
  export const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };