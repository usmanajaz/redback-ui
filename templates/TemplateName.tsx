import { FC } from 'react';
import { StyledTemplateName } from './TemplateName.style';

type TemplateNameProps = {}

const TemplateName: FC<TemplateNameProps> = () => {
	return (
		<StyledTemplateName data-testid="TemplateName">
			TemplateName Component
		</StyledTemplateName>
	);
};

export default TemplateName;
