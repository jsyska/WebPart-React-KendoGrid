import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IKendoReactSpfxWebPartProps {
    description: string;
}
export default class KendoReactSpfxWebPart extends BaseClientSideWebPart<IKendoReactSpfxWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
