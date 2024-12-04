export interface BreadcrumbArgs {
  items: number;
  additionalItems?: number;
}

export function setBreadcrumbItems(args: BreadcrumbArgs) {
  const { items, additionalItems } = args;

  return Array.from({ length: items }).map((_, index) => {
    if (additionalItems && index === 0) {
      return {
        title: 'Item 1.1',
        link: '/',
        additionalItems: Array.from({ length: additionalItems }).map((_, i) => ({
          title: `Item 1.${i + 2}`,
          link: '/',
        })),
      };
    }

    return {
      title: `Item ${index + 1}`,
      link: '/',
    };
  });
}
