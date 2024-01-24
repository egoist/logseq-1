// @ts-ignore
const LSUI = window.LSUI

export function Tooltip({ side, content, sideOffset = 10, ...rest }) {
  return content ? (
    <LSUI.TooltipProvider delayDuration={300}>
      <LSUI.Tooltip>
        <LSUI.TooltipTrigger asChild>{rest.children}</LSUI.TooltipTrigger>
          <LSUI.TooltipContent
            sideOffset={sideOffset}
            side={side}
            {...rest}
          >
            {content}
            <LSUI.TooltipArrow className="tl-tooltip-arrow" />
          </LSUI.TooltipContent>
      </LSUI.Tooltip>
    </LSUI.TooltipProvider>
  ) : (
    <>{rest.children}</>
  )
}
