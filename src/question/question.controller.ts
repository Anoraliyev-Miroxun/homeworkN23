import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { AnswerQuestionDto } from './dto/savolga-javob.dto';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() dto: CreateQuestionDto) {
    return this.questionService.createQuestion(dto);
  }

  @Get('/random')
  getRandomQuestion() {
    return this.questionService.getRandomQuestion();
  }

  @Post('/javob')
  checkAnswer(@Body() dto: AnswerQuestionDto) {
    return this.questionService.checkAnswer(dto);
  }
}
