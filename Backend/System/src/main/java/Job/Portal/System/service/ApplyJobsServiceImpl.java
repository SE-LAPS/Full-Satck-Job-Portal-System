package Job.Portal.System.service;

import Job.Portal.System.model.ApplyJobsModel;
import Job.Portal.System.repository.ApplyJobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Implementation of the ApplyJobsService interface.
 */
@Service
public class ApplyJobsServiceImpl implements ApplyJobsService {

    @Autowired
    private ApplyJobsRepository applyJobsRepository;

    @Override
    public ApplyJobsModel applyForJob(ApplyJobsModel applyJobsModel) {
        return applyJobsRepository.save(applyJobsModel);
    }

    @Override
    public List<ApplyJobsModel> getAllApplications() {
        return applyJobsRepository.findAll();
    }

    @Override
    public ApplyJobsModel getApplicationById(Long id) {
        return applyJobsRepository.findById(id).orElse(null);
    }

    @Override
    public ApplyJobsModel updateApplication(ApplyJobsModel applyJobsModel) {
        return applyJobsRepository.save(applyJobsModel);
    }

    @Override
    public void deleteApplication(Long id) {
        applyJobsRepository.deleteById(id);
    }

    @Override
    public Map<String, Integer> getApplicationCountByJobTitle() {
        List<Object[]> results = applyJobsRepository.countApplicationsByJobTitle();
        Map<String, Integer> applicationCounts = new HashMap<>();

        for (Object[] result : results) {
            String positionTitle = (String) result[0];
            Long count = (Long) result[1];
            applicationCounts.put(positionTitle, count.intValue());
        }

        return applicationCounts;
    }
}