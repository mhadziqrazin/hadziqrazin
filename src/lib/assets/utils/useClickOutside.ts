export function clickOutside(node: any, callback: () => void) {
  const handleClick = (e: any) => {
    if (node && !node.contains(e.target)) callback()
  }

  document.addEventListener('click', handleClick)

  return {
    destroy() {
      document.removeEventListener('click', handleClick)
    }
  }
}
