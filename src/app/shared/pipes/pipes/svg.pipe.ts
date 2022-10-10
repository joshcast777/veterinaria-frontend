import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "svg"
})
export class SvgPipe implements PipeTransform {
	transform(name: string = "image", folders: string = ""): string {
		return `./assets/svgs/${folders}${name}.svg`;
	}
}
