export interface CardArgs {
  title?: string;
}

export const style = `
  p {
    margin: 0;
  }
`;

export function setTemplate(args: CardArgs): string {
  const header = `<flag-card-header>${args.title}</flag-card-header>`;
  const content = `
    <flag-card-content>
      <p>Country in <strong>Africa</strong></p>
    </flag-card-content>
  `;
  const footer = `
    <flag-card-footer>
      <button flagButton ghost>Delete</button>
      <button flagButton>Edit</button>
    </flag-card-footer>
  `;

  return `
    <flag-card>
      ${args.title && header}
      ${content}
      ${footer}
    </flag-card>
  `;
}
