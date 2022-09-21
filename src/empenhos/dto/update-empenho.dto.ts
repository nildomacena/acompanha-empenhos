import { PartialType } from "@nestjs/mapped-types";
import { CreateEmpenhoDto } from "./create-empenho.dto";

export class UpdateEmpenhoDto extends PartialType(CreateEmpenhoDto) {

}
